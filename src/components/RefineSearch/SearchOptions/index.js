export const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
    }),
    control: base => ({
      ...base,
      "&:hover": {
        borderColor: "orange"
      },
      boxShadow: 'none',
      borderColor: 'orange',
      fontSize:'12pt'
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "orange" : null,
        color: "black",
        "&:active": {
          backgroundColor: "orange"
        }
      };
    }
  }
  export const languages = [
    { label: 'C', value: '+language:c' },
    { label: 'C++', value: '+language:c++' },
    { label: 'C#', value: '+language:c#' },
    { label: 'Go', value: '+language:Go' },
    { label: 'Java', value: '+language:Java' },
    { label: 'Javascript', value: '+language:Javascript' },
    { label: 'PHP', value: '+language:php' },
    { label: 'Python', value: '+language:Python' },
    { label: 'Ruby', value: '+language:Ruby' },
    { label: 'Scala', value: '+language:Scala' },
    { label: 'TypeScript', value: '+language:TypeScript' }
  ];

  export const sort = [
    { label: 'Best Match', value: '', sortResults: 'true' },
    { label: 'Rating', value: '&sort=stars', sortResults: 'true' }
  ];