
// import img from "./images/cupcake.png";
const Card = ({ data }) => {
    return (
        <>
            {
                data.map((val, ind) => {

                    return (
                        <>

                          
                                <div class="team-section" style={{marginLeft:'50px'}}>
                                    <div class="team-member">
                                        <img src="https://cutt.ly/Hwn6Y0NL" alt="Team Member 1" />
                                        <h3>{val.name}</h3>
                                        <p class="role">{val.role}</p>
                                        <a href="#" class="fa fa-facebook"></a>
                                        <a href="#" class="fa fa-twitter"></a>
                                        <a href="#" class="fa fa-linkedin"></a>
                                    </div>
                                </div>

                        </>
                    )
                })
            }
        </>
    )

}

export default Card;