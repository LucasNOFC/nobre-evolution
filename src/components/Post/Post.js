import "./Post.modules.css"

const Post = ({title, text, imagename}) => {
    return (
        <div className="post">
            <img className="capa"
            src={require(`../../assets/banners/${imagename}.png`)}
            alt="Imagem banner"
            />

            <h2 className="titulo">
                {title}
            </h2>

            <button className="botaoLer">Read</button>
        </div>
    );
}

export default Post;