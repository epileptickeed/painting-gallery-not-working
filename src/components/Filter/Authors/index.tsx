import styles from './Authors.module.scss';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { AuthorsProps, setSelectedAuthor } from '../../../../redux/optionsSlice/slice';
import useMenuAnimation from '../anim';
import { optionSelector } from '../../../../redux/optionsSlice/selector';
import UseAuthorsData from '../../../../hooks/UseAuthorsData';

const Authors = () => {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  const { selectedAuthor } = useSelector(optionSelector);
  const authors = UseAuthorsData();

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

  const handleSelectAuthor = (author: AuthorsProps) => {
    dispatch(setSelectedAuthor(author));
    setAreOptionsVisible(false);
  };

  if (!authors) {
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
        <h2>Artists</h2>
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
            placeholder="Select the author"
            value={selectedAuthor.name || userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />

          <div
            className="arrow"
            style={{ transformOrigin: '50% 45%', position: 'absolute', right: 10, top: '20%' }}>
            <img src="/icons/expand_icon.png" alt="icon" />
          </div>
        </motion.form>

        {/* </motion.button> */}

        <ul
          style={{
            pointerEvents: areOptionsVisible ? 'auto' : 'none',
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
          }}
          className={styles.list_main}
          ref={optionsContainer}>
          {authors?.data?.length > 0 ? (
            authors.data.map((item: AuthorsProps) => {
              return (
                <li onClick={() => handleSelectAuthor(item)} key={item.id}>
                  {item.name}
                </li>
              );
            })
          ) : (
            <li>No authors available</li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Authors;
