function Imagemprincipal({img, alt="", width="50", height="30"}){
    const imageStyle = {
        width: width + "vw",
        height: height + "vh"
    };

    return <img src={`/images/${img}`} alt={alt} style={imageStyle} className="imagem" />
}

export default Imagemprincipal;