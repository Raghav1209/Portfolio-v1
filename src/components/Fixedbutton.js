import React from "react";

const fixedButton = () => {

    function scrollToTop() {
        window.scrollTo(0,0);
    }

    return (
        <div class="fixedButton" onClick={scrollToTop}>
            <div class="roundedFixedBtn"><i class="fa fa-arrow-circle-up"></i></div>
        </div>
    );
}

export default fixedButton;