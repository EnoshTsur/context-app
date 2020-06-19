export default function createMapper(mapping, defaultValue) {
    return key => {
      const defaultVal = defaultValue === undefined
        ? key
        : defaultValue;
      return (key in mapping
        ? mapping[key]
        : defaultVal
      );
    };
  }