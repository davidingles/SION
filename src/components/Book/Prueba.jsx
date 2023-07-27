
const ReloadButton = () => {
  const reloadPage = () => {
    window.location.reload();
    console.log('first')
  };
   return (
    <button onClick={reloadPage}>Recargarrrr</button>
  );
};
 export default ReloadButton;