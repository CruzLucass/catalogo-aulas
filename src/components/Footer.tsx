
import '../styles/footer.scss'
import core from '../assets/images/coracao.png'

export function Footer() {
    return (
        <div className="container-footer">
            <strong>
                Site developed with
                <img src={core} alt='love' />
                for   <p>©Lucas Cruz, 2022.</p>
            </strong>
        </div>
    )
}