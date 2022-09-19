import {CategoryPreviewContainer} from './category-preview.styles.jsx';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({title, products}) => {

    return(
        <CategoryPreviewContainer>
            <h2>
                <Link className={title} to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {
                    //
                    
                    products
                    .slice(0,4)  // .filter(( _, idx) => idx < 4 )
                    .map((product) =>{

                        return <ProductCard key={product.id} product={product} />

                    })
                }
            </div>
        </CategoryPreviewContainer>
    )

}

export default CategoryPreview;