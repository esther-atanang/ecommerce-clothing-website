import React from 'react'
import Questions from './FAQ'
import star from "./star.png"
const Item = ({theItem}) => {
  
  return (
    <div className='item-display'>
        <div className='item-first-inner'>
            <div className='images'>

              {Object.values(theItem.images).map(value=><div className='item-img'><img src={value} alt=""/></div>)
                }

            </div>
            <div className='item-desc'>
               <div className='title'>
                 <p className='item-header'>{theItem.name}</p>
                 <p className='item-price'>{theItem.price}</p>
               </div>
               <div className="rate">
                     <div className="ratings" >
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                     </div>
                    <div className="review"><p>{theItem.reviews} reviews</p></div>
                </div>
                <div><p className='para-pay'>Pay in 4 interest-free installments of $13.50 with shop pay Learn more</p></div>
                <div className='sizes'>
                   <div className='small'>s</div>
                   <div className='small'>m</div>
                   <div className='small'>l</div>
                   <div className='small'>xl</div>
                   <div className='small'>2x</div>
                </div>
                <div> <button className='btn'>sold out</button></div>
            </div>
        </div>
        <div className="reviews">
             <div className='stats'>
                  <div className='header'><h2>Customer Reviews</h2></div>
                  <div className='review-stars'>
                     <span><img src={star} alt="star"/></span>
                     <span><img src={star} alt="star"/></span>
                     <span><img src={star} alt="star"/></span>
                     <span><img src={star} alt="star"/></span>
                     <span><img src={star} alt="star"/></span>
                  </div>
                  <div><p>Based on 7 reviews </p></div>
                  <div className='review-btn'><a href='#'> write a review</a></div>
             </div>
             <div className='the-reviews'>
                 <div className='the-review'>
                       <div className="customer">
                         <div className='name-tag'>M</div>
                         <div className='cus-desc'>  
                          <div className='rating'>
                          <span><img src={star} alt="star"/></span>
                          <span><img src={star} alt="star"/></span>
                          <span><img src={star} alt="star"/></span>
                          <span><img src={star} alt="star"/></span>
                          <span><img src={star} alt="star"/></span>
                          <span>05/10/23</span>
                          </div>
                         <div className='name'>Mimi layeh</div>
                     </div>
                       </div>
                       <div>
                         <h3>Great!!</h3>
                        <p>My daughter loves this sweats!!
                           Good quality!!
                        </p>
                        </div>
                 </div>

                  <div className='the-review'>
                       <div className="customer">
                         <div className='name-tag'>T</div>
                         <div className='cus-desc'>  
                          <div className='rating'>
                          <span><img src={star} alt="star"/></span>
                          <span><img src={star} alt="star"/></span>
                          <span><img src={star} alt="star"/></span>
                          <span><img src={star} alt="star"/></span>
                          <span><img src={star} alt="star"/></span>
                          <span>02/9/23</span>
                          </div>
                         <div className='name'>Toni Rodriguez</div>
                     </div>
                       </div>
                       <div>
                         <h3>Warm colourful and sweet and soft.</h3>
                        <p>
                        Emma like you, the pants are Warm colourful genuine and where soft with sweetness and light. We love the sweat pants they suit me and are unique and well designed with much thought put into the fabric.
                        </p>
                        </div>
                 </div>


                 <div className='the-review'>
                       <div className="customer">
                         <div className='name-tag'>J</div>
                         <div className='cus-desc'>  
                          <div className='rating'>
                          <span><img src={star} alt="star"/></span>
                          <span><img src={star} alt="star"/></span>
                          <span><img src={star} alt="star"/></span>
                          <span><img src={star} alt="star"/></span>
                          <span><img src={star} alt="star"/></span>
                          <span>08/11/22</span>
                          </div>
                         <div className='name'>Joel Mandez</div>
                     </div>
                       </div>
                       <div>
                         <h3>too small :(</h3>
                        <p>
                        The quality of these is really good and the jogger style isn’t too tapered which is nice! Size up 2 sizes if you want it at allll baggy. I am normally a medium in bottoms but I sized up for an oversized fit but it’s hugging my butt and pretty tight all around :( I would have been com
                        </p>
                        </div>
                 </div>

             </div>
        </div>
    </div>
  )
}

export default Item;


