import LoadingImage from "../assets/loading.svg"

const LoadingIndicator = () => {
    return (
        <div>
            <img style={{margin:"auto"}} src={LoadingImage} alt="" />
        </div>
    );
}

export default LoadingIndicator;
