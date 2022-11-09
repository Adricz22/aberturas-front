
const NovedadItem = (props) => {
    const { title, imagen, body } = props;

    return (
        <div >
            <div className="container col-12  " >
                <div className="row " >
                    <div className="text1 mb-2">{title}</div>
                    <div className="mb-2" dangerouslySetInnerHTML={{ __html: body }} />
                    <img class="col-sm-8 col-md-6 col-lg-4 mb-2 mx-auto" src={imagen} />
                    <hr />
                </div>
            </div>
        </div>


    );
}

export default NovedadItem;
