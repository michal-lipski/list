import React from 'react';
import {times} from "lodash";

import './raiting.css'

export const StarRating = ({rating, votes}) => {
    const numberOfStars = Math.floor(rating);
    const halfStar = rating - numberOfStars >= 0.5;
    return (
        <div className="star-rating">
            <div className="rating">
                {times(numberOfStars, (index) => (
                    <span className="star full selected"/>
                ))}
                {halfStar ? (
                    <span>
                        <span className="star full"/>
                        <span className="star half selected"/>
                    </span>
                ) : null}
                {times(5 - numberOfStars - (halfStar ? 1 : 0), (index) => (
                    <span className="star full"/>
                ))}

            </div>
            <span className="rating-number">{rating}</span>
            <span className="rating-votes">{votes} ocen</span>

        </div>
    );

};


{/*<fieldset className="rating">*/
}
{/*<input type="radio" id="star5" name="rating" value="5"/>*/
}
{/*<label className="full" htmlFor="star5" title="Awesome - 5 stars"/>*/
}
{/*<input type="radio" id="star4half" name="rating" value="4 and a half"/>*/
}
{/*<label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"/>*/
}
{/*<input type="radio" id="star4" name="rating" value="4"/>*/
}
{/*<label className="full" htmlFor="star4" title="Pretty good - 4 stars"/>*/
}
{/*<input type="radio" id="star3half" name="rating" value="3 and a half"/>*/
}
{/*<label className="half" htmlFor="star3half" title="Meh - 3.5 stars"/>*/
}
{/*<input type="radio" id="star3" name="rating" value="3"/>*/
}
{/*<label className="full" htmlFor="star3" title="Meh - 3 stars"/>*/
}
{/*<input type="radio" id="star2half" name="rating" value="2 and a half"/>*/
}
{/*<label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"/>*/
}
{/*<input type="radio" id="star2" name="rating" value="2"/>*/
}
{/*<label className="full" htmlFor="star2" title="Kinda bad - 2 stars"/>*/
}
{/*<input type="radio" id="star1half" name="rating" value="1 and a half"/>*/
}
{/*<label className="half" htmlFor="star1half" title="Meh - 1.5 stars"/>*/
}
{/*<input type="radio" id="star1" name="rating" value="1"/>*/
}
{/*<label className="full" htmlFor="star1" title="Sucks big time - 1 star"/>*/
}
{/*<input type="radio" id="starhalf" name="rating" value="half"/>*/
}
{/*<label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"/>*/
}
{/*</fieldset>*/
}