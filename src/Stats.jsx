export default function Stats({ items }) {
  if (!items.length)
    return (
      <span className="stats">Adding Some Items to Your Packing List 🚀</span>
    );
  const numItems = items ? items.length : 0;
  const progItems =
    (items.filter((item) => item.packed !== false).length / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {progItems === 100 ? (
          <span>You are ready to go!✈️</span>
        ) : (
          <span>
            You have {numItems} items on your list, and you already packed{" "}
            {Math.round(progItems)}
            {" %"}
          </span>
        )}
      </em>
    </footer>
  );
}
