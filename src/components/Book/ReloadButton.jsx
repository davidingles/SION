
const ReloadButton = () => {
  const reloadPage = () => {
    window.location.reload();
  };
   return (
    <button onClick={reloadPage}></button>
  );
};
 export default ReloadButton;

 