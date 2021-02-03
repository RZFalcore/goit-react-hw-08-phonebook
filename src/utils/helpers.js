export const numberFormater = (number) => {
  if (number.length > 9) {
    return number.slice(0, -1);
  }
  if (number.length === 3 || number.length === 6) {
    return number + "-";
  }
  return number;
};

export const contactsFilter = (filter, contacts) =>
  contacts &&
  contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
