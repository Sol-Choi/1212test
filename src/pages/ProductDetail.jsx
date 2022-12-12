import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const param=useParams()
    return ( <div>
{param.name} <h3>상품의 이름으로 상품의 페이지를 출력하고 있습니다.</h3>
    </div>  );
}
 
export default ProductDetail;