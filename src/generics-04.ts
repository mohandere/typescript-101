interface BaseEvent {
  productId: number;
  time: number;
  payload: object;
}
interface EventsMap {
  addToCart: { quantity: number } & BaseEvent;
  checkout: { total: number } & BaseEvent;
}
function emit<EventTpe extends keyof EventsMap>(
  type: EventTpe,
  data: EventsMap[EventTpe]
) {
  console.log(type, data);
}
emit("addToCart", {
  payload: {},
  productId: 1,
  time: 123,
  quantity: 1,
});
