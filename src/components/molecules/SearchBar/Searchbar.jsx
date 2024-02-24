import React from 'react';
import InputField from '../../atoms/InputField/InputField.jsx';
import Button from '../../atoms/Button/Button.jsx';
import Icon from '../../atoms/Icon/Icon.jsx';
import {colors} from '../../../globalStyle/variabls.js'; 

const styles = {
  searchBar: {
    backgroundColor: colors.white,
    padding: "17px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: `0px 4px 20px 0px rgba(0, 0, 0, 0.15)`,
  },
  input: {
    marginRight: "10px",
    width: '80%',
  },
  buttonIcon: {
    marginLeft: "-55px",
    marginRight: "24px",
  },
  empty: {
    '& $buttonIcon': {
      display: 'none',
    },
  },
};

const Searchbar = ({ searchText, onChangeHandler, resetSearch, setNoteFormState }) => {
  return (
    <div style={searchText?.length === 0 ? { ...styles.searchBar, ...styles.empty } : styles.searchBar}>
      <InputField
        inputType='text'
        placeholder='Search'
        icon={<Icon name="search" fill={colors.gray600} width="24" height="24" />}
        inputValue={searchText}
        onChangeHandler={onChangeHandler}
        style={styles.input}
      />
     
      <Button
        text='Add'
        icon={<Icon name='add' fill={colors.white} width="24" height="24" />}
        buttonType='primary'
        clickHandler={() => setNoteFormState({ isNotesFormOpen: true, isEditState: false, editNoteId: "" })}
        style={{ backgroundColor: colors.blue400, color: colors.white }}
      />
    </div>
  );
};

export default Searchbar;
