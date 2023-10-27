'use client';
import {
  Children,
  cloneElement,
  FC,
  forwardRef,
  isValidElement,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { googleMapKey } from '@ippsop/lib/client.api';

export const GoogleMap = () => {
  if (process.env.NODE_ENV !== 'production') {
    // Prevent useless API calls
    return <DivWrapper />;
  }
  return (
    <Wrapper apiKey={googleMapKey}>
      <Map>
        <Marker position={defaultMapOptions.center} />
      </Map>
    </Wrapper>
  );
};

//

const defaultMapOptions: google.maps.MapOptions = {
  center: {
    lat: 43.1080115,
    lng: 5.8542411,
  },
  zoom: 17,
};

const DivWrapper = forwardRef<HTMLDivElement>(function DivWrapper(_, ref) {
  return (
    <div
      ref={ref}
      className={'block-shadow display-on-scroll min-h-[300px] bg-gray-400'}
    />
  );
});

const Map: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (!!ref.current && !map) {
      setMap(new google.maps.Map(ref.current, defaultMapOptions));
    }
  }, [ref, map]);

  return (
    <>
      <DivWrapper ref={ref} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Marker: FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }
    return () => marker?.setMap(null);
  }, [marker]);

  useEffect(() => marker?.setOptions(options), [marker, options]);

  return null;
};
