import styles from './Locations.module.scss';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import UseLocationsData from '../../../../hooks/UseLocationsData';
import { useDispatch, useSelector } from 'react-redux';
import { LocationsProps, setSelectedLocation } from '../../../../redux/optionsSlice/slice';
import useMenuAnimation from '../anim';
import { optionSelector } from '../../../../redux/optionsSlice/selector';

const Location = () => {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  const { selectedLocation } = useSelector(optionSelector);
  const locations = UseLocationsData();

  const optionsContainer = useRef<HTMLUListElement | null>(null);
  const optionsButton = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        !optionsContainer.current?.contains(event.target as Node) &&
        event.target != optionsButton.current
      ) {
        setAreOptionsVisible(!optionsContainer);
      }
    };

    window.addEventListener('mousedown', handler);
    return () => {
      window.addEventListener('mousedown', handler);
    };
  }, []);

  const scope = useMenuAnimation(areOptionsVisible);

  const handleSelectLocation = (locations: LocationsProps) => {
    dispatch(setSelectedLocation(locations));
    setAreOptionsVisible(false);
  };

  if (!locations) {
    return (
      <div ref={scope}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.locations_menu}>
      <div
        className={styles.locations_menu_inner}
        onClick={() => setIsSelectorVisible(!isSelectorVisible)}>
        <h2>Location</h2>
        <img
          src={isSelectorVisible ? '/icons/minus_icon.png' : '/icons/plus_icon.png'}
          alt="icon"
        />
      </div>
      <nav
        className={styles.locations_options}
        ref={scope}
        style={{ display: isSelectorVisible ? 'block' : 'none' }}>
        <motion.form>
          <motion.input
            type="text"
            whileTap={{ scale: 0.97 }}
            onClick={() => setAreOptionsVisible(!areOptionsVisible)}
            className={styles.menu_btn}
            ref={optionsButton}
            placeholder="Select the location"
            value={selectedLocation.location || userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />

          <div
            className="arrow"
            style={{ transformOrigin: '50% 45%', position: 'absolute', right: 10, top: '20%' }}>
            <img src="/icons/expand_icon.png" alt="icon" />
          </div>
        </motion.form>

        <ul
          style={{
            pointerEvents: areOptionsVisible ? 'auto' : 'none',
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
          }}
          className={styles.list_main}
          ref={optionsContainer}>
          {locations?.data?.length > 0 ? (
            locations.data.map((item: LocationsProps) => {
              return (
                <li onClick={() => handleSelectLocation(item)} key={item.id}>
                  {item.location}
                </li>
              );
            })
          ) : (
            <li>No locationss available</li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Location;
