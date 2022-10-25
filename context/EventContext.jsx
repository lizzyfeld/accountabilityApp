import { createContext, useState, useContext } from "react";

const eventType = {
  id: "",
  name: "",
};

const EventContext = createContext({
  ...eventType,
  setEvent: (event = eventType) => {},
});

export const EventContextProvider = (props) => {
  const [event, setEvent] = useState({ id: "2", name: "Event Name" });
  return (
    <EventContext.Provider value={{ ...event, setEvent }}>
      {props.children}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);

export default EventContext;
