function ShowImage(props) {
    return (
        <ul>
            {props.data.map((people, index) => (
                <li key={index}>
                    <h3>{people.name}</h3>
                    <h3>{people.age}</h3>
                    <img 
                    src={people.url}
                    onError={({ currentTarget }) => {
                        if (currentTarget && currentTarget.src) {
                          currentTarget.src =
                            "https://img5.thuthuatphanmem.vn/uploads/2021/11/10/hinh-anh-chiec-meo-cute_042939175.jpg";
                        }
                      }}             
                    ></img>
                </li>
            )
            )}
            
        </ul>
    )



}

export default ShowImage