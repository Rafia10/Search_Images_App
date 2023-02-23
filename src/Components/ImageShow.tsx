//@ts-ignore
export const ImageShow = ({ item }) => {
  return (
    <div>
      <img src={item.urls.small} alt={item.alt_description} />
    </div>
  );
};
