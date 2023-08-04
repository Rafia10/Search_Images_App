//@ts-ignore
export const ImageShow = ({ item }) => {
  return (
    <div>
      <img src={item.urls.small_s3} alt={item.alt_description} />
    </div>
  );
};
