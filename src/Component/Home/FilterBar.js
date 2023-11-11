// In this code the filterbar component is providing a user interface for filtering products based on price and category.
// css styles 
import styles from "../../styles/filterbar.module.css";


// render the filter bar
export default function FilterBar(props){
    const {price,setPrice,setCategory}=props;

    return(

        // main container of filter bar
        <div className={styles.filterBar}>

            {/* heading */}
            <h1>
                FilterBar
            </h1>

            {/* price ranger and price slider  */}
            <div className={styles.priceRange}>
                {/* sub heading */}
                <span>Price</span>{` <= ${price}`}
                <br />
                {/* slider  */}
                <input type="range" 
                    min="399" 
                    max="30000" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} />
            </div>
                
                
            {/* sort item by category */}
            <div className={styles.categoryBox}>
                {/* sub heading */}
                <span>Category:</span>

                {/* radio buttons for differnet category */}
               
                <div>
                    {/* men category */}
                    <input type="radio" 
                        id="men" 
                        value="men" 
                        name="category" 
                        onClick={()=>setCategory("men")}/>
                    <label for="men">Men</label>
                    
                    {/* women category */}
                    <input type="radio" 
                        id="women" 
                        value="women" 
                        name="category"
                        onClick={()=>setCategory("women")}/>
                    <label for="women">Women</label>
                    
                    {/* electronic */}
                    <input type="radio" 
                        id="electronics" 
                        value="electronics" 
                        name="category"
                        onClick={()=>setCategory("electronics")}/>
                    <label for="electronics">Electronics</label>
                    
                    {/* jewellery */}
                    <input type="radio" 
                        id="kids" 
                        value="kids" 
                        name="category"
                        onClick={()=>setCategory("kids")}/>
                    <label for="kids">Kids</label>

                    {/* none  */}
                    <input type="radio" 
                        id="acessories" 
                        value="acessories" 
                        name="category"
                        onClick={()=>setCategory("acessories")}/>
                    <label for="acessories">Acessories</label>
                </div>

            </div>
            
        </div>
        
    )
}
