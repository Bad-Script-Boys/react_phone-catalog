import React from 'react';
import styles from './Categories.module.scss';

const {
  categories,
  categories__wrap,
  categories__colors,
  categories__colors_wrap,
  categories__colors_title,
  categories__colors_vers,
  categories__colors_option,
  categories__colors_input,
  categories__colors_circle,
  categories__colors_id,
  categories__memory,
  categories__memory_title,
  categories__memory_vers,
  categories__memory_option,
  categories__memory_input,
  categories__memory_btn,
  categories__info,
  categories__info_price,
  categories__info_main,
  categories__info_price_value,
  categories__info_price_discount,
  categories__info_main_addBtn,
  categories__info_main_likeBtn,
  categories__info_list,
  categories__info_list_item,
  categories__info_list_item_name,
  categories__info_list_item_value,
  categories__info_main_likeBtn_frag,
} = styles;

export const Categories: React.FC = () => {
  return (
    <div className={categories}>
      <div className={categories__wrap}>
        <div className={categories__colors}>
          <div className={categories__colors_wrap}>
            <p className={categories__colors_title}>Available colors</p>
            <div className={categories__colors_vers}>
              <label className={categories__colors_option} htmlFor="color1">
                <input
                  type="radio"
                  name="color"
                  className={categories__colors_input}
                  id="color1"
                />
                <span
                  className={`${categories__colors_circle} bg-customAvailableColor1`}
                ></span>
              </label>
              <label className={categories__colors_option} htmlFor="color2">
                <input
                  type="radio"
                  name="color"
                  className={categories__colors_input}
                  id="color2"
                />
                <span
                  className={`${categories__colors_circle} bg-customAvailableColor2`}
                ></span>
              </label>
              <label className={categories__colors_option} htmlFor="color3">
                <input
                  type="radio"
                  name="color"
                  className={categories__colors_input}
                  id="color3"
                />
                <span
                  className={`${categories__colors_circle} bg-customAvailableColor3`}
                ></span>
              </label>
              <label className={categories__colors_option} htmlFor="color4">
                <input
                  type="radio"
                  name="color"
                  className={categories__colors_input}
                  id="color4"
                />
                <span
                  className={`${categories__colors_circle} bg-customAvailableColor4`}
                ></span>
              </label>
            </div>
          </div>
          <p className={categories__colors_id}>{`ID: 802390`}</p>
        </div>
        <div className={categories__memory}>
          <p className={categories__memory_title}>Select capacity</p>
          <div className={categories__memory_vers}>
            <label className={categories__memory_option} htmlFor="memory1">
              <input
                type="radio"
                name="memory"
                className={categories__memory_input}
                id="memory1"
              />
              <span className={categories__memory_btn}>64 GB</span>
            </label>
            <label className={categories__memory_option} htmlFor="memory2">
              <input
                type="radio"
                name="memory"
                className={categories__memory_input}
                id="memory2"
              />
              <span className={categories__memory_btn}>256 GB</span>
            </label>
            <label className={categories__memory_option} htmlFor="memory3">
              <input
                type="radio"
                name="memory"
                className={categories__memory_input}
                id="memory3"
              />
              <span className={categories__memory_btn}>512 GB</span>
            </label>
          </div>
        </div>
        <div className={categories__info}>
          <div className={categories__info_price}>
            <p className={categories__info_price_value}>{`${'$799'}`}</p>
            <p className={categories__info_price_discount}>{`${'$1199'}`}</p>
          </div>
          <div className={categories__info_main}>
            <button className={categories__info_main_addBtn}>
              {`${'Add to cart'}`}
            </button>
            <button className={categories__info_main_likeBtn}>
              <img
                className={categories__info_main_likeBtn_frag}
                src="../../../src/components/Categories/img//heart-like.svg"
                alt="heart-like"
              />
            </button>
          </div>
          <ul className={categories__info_list}>
            <li className={categories__info_list_item}>
              <p className={categories__info_list_item_name}>Screen</p>
              <p
                className={categories__info_list_item_value}
              >{` ${'6.5"'}${'OLED'}`}</p>
            </li>
            <li className={categories__info_list_item}>
              <p className={categories__info_list_item_name}>Resolution</p>
              <p
                className={categories__info_list_item_value}
              >{`${'2688x1242'}`}</p>
            </li>
            <li className={categories__info_list_item}>
              <p className={categories__info_list_item_name}>Processor</p>
              <p
                className={categories__info_list_item_value}
              >{`${'Apple A12 Bionic'}`}</p>
            </li>
            <li className={categories__info_list_item}>
              <p className={categories__info_list_item_name}>RAM</p>
              <p className={categories__info_list_item_value}>{`${'3 GB'}`}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
