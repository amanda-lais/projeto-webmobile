import Imagemprincipal from "./Imagemprincipal";

function Paginaprincipal({imgsrc,imgalt}){
    return(
        <div className="paginaprincipal">
            <Imagemprincipal img={imgsrc} alt={imgalt} />
        </div>
    );
}

export default Paginaprincipal;