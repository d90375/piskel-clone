import React from "react";
import "./example.scss";

const Example = () => {
  return (
    <section className="example">
      <div className="example__wrap">
        <h3 className="example__title">Example sprites</h3>
        <p className="example__text">
          Here are some examples of user submitted sprites. Click on a preview to open the sprite in
          the editor.
        </p>
        <div className="example__wrapImg">
          <div className="example__wrapImg1">
            <div className="example__wrapText">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, neque.
              </span>
              <div className="example__Img" />
            </div>
            <div className="example__wrapText">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae consequatur
                dolorum iusto magnam velit!
              </span>
              <div className="example__Img" />
            </div>
            <div className="example__wrapText">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
              <div className="example__Img" />
            </div>
          </div>
          <div className="example__wrapImg2">
            <div className="example__wrapText">
              <div className="example__Img" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur
                consequuntur cum debitis delectus harum id illum, incidunt magni necessitatibus non,
                numquam perferendis qui recusandae reiciendis sequi sit voluptas voluptatem.
              </span>
            </div>
            <div className="example__wrapText">
              <div className="example__Img" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, iusto, unde.
                Doloremque esse fugit quod?
              </span>
            </div>
            <div className="example__wrapText">
              <div className="example__Img" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ipsam nostrum quod
                voluptatem?
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Example;
