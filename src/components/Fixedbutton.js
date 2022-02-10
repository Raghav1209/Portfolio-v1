import React from "react";

const fixedButton = () => {

    function scrollToTop() {
        window.scrollTo(0,0);
    }

    return (
        <a class="fixedButton" onClick={scrollToTop}>
            <div class="roundedFixedBtn"><i class="fa fa-arrow-circle-up"></i></div>
        </a>
    );
}

export default fixedButton;