
import styled from 'styled-components';
import { AiFillEyeInvisible } from 'react-icons/ai';


const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 50px;
  @media (max-width: 768px) {
   display: block;
   padding: 20px;
   gap: 0px;
  }
`;

// const Image = styled.img`
//   max-width: 40%;
//   border-radius: 10px;
// `;
const ImageWrapper = styled.div`
  width: 40%;
  @media (max-width: 768px) {
   width: 300px;
  }
`;

const FormWrapper = styled.div`
  width: 60%;
  padding: 40px;
  box-shadow: 0 0 10px 10px #F5F5F5;
  border-radius: 12px;

  @media (max-width: 768px) {
   width: 85%;
   padding: 30px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
`;

const Label = styled.label`
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 0.5rem;
  border: 1px solid rgba(4, 7, 47, 0.40);
  @media (max-width: 768px) {
   width: 95%;
  }
`;

const Password = styled.div`
  position: relative;
`;

const Icon = styled.p`
  position: absolute;
  top: 22px;
  right: 0;
  color: gray;
`;


const Span = styled.span`
  color: #F78719;
`;

const Remember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -15px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #1575A7;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 75%;
  margin: 0 auto;
  @media (max-width: 768px) {
   width: 100%;
  }
`;

const Register = styled.p`
  text-align: center;
`;

// media query


// Form Component
const LoginForm = () => {
  return (
    <Container>
      <ImageWrapper>
        <svg width="340" height="434" viewBox="0 0 544 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_41)">
            <path d="M525.662 233.529H17.0919C12.5605 233.523 8.21608 231.721 5.01184 228.517C1.8076 225.312 0.00517136 220.968 -6.10352e-05 216.437V17.092C0.00517136 12.5605 1.8076 8.21611 5.01184 5.01187C8.21608 1.80763 12.5605 0.00520188 17.0919 -3.05176e-05H525.662C530.194 0.00520188 534.538 1.80763 537.742 5.01187C540.946 8.21611 542.749 12.5605 542.754 17.092V216.437C542.749 220.968 540.946 225.312 537.742 228.517C534.538 231.721 530.193 233.523 525.662 233.529Z" fill="#F2F2F2" />
            <path d="M407.052 222.628H97.8197C74.7761 222.602 52.6838 213.436 36.3895 197.142C20.0952 180.848 10.9297 158.755 10.9037 135.712V97.8264C10.9297 74.7828 20.0952 52.6904 36.3894 36.396C52.6837 20.1016 74.776 10.936 97.8197 10.9098H444.937C467.981 10.936 490.073 20.1016 506.367 36.396C522.662 52.6904 531.827 74.7828 531.853 97.8264C531.816 130.914 518.655 162.636 495.258 186.033C471.862 209.429 440.14 222.59 407.052 222.628Z" fill="white" />
            <path d="M327.283 67.9756H122.876C121.707 67.9756 120.586 67.5112 119.759 66.6845C118.933 65.8579 118.468 64.7367 118.468 63.5676C118.468 62.3985 118.933 61.2773 119.759 60.4506C120.586 59.624 121.707 59.1595 122.876 59.1595H327.283C328.452 59.1595 329.573 59.624 330.4 60.4506C331.226 61.2773 331.691 62.3985 331.691 63.5676C331.691 64.7367 331.226 65.8579 330.4 66.6845C329.573 67.5112 328.452 67.9756 327.283 67.9756Z" fill="#E6E6E6" />
            <path d="M430.757 115.006H122.876C121.707 115.006 120.586 114.542 119.759 113.715C118.933 112.889 118.468 111.767 118.468 110.598C118.468 109.429 118.933 108.308 119.759 107.481C120.586 106.655 121.707 106.19 122.876 106.19H430.757C431.926 106.19 433.047 106.655 433.874 107.481C434.7 108.308 435.165 109.429 435.165 110.598C435.165 111.767 434.7 112.889 433.874 113.715C433.047 114.542 431.926 115.006 430.757 115.006Z" fill="#E6E6E6" />
            <path d="M430.757 162.037H122.876C121.707 162.037 120.586 161.573 119.759 160.746C118.933 159.919 118.468 158.798 118.468 157.629C118.468 156.46 118.933 155.339 119.759 154.512C120.586 153.686 121.707 153.221 122.876 153.221H430.757C431.926 153.221 433.047 153.686 433.874 154.512C434.7 155.339 435.165 156.46 435.165 157.629C435.165 158.798 434.7 159.919 433.874 160.746C433.047 161.573 431.926 162.037 430.757 162.037Z" fill="#E6E6E6" />
            <path d="M430.757 162.037H122.876C121.707 162.037 120.586 161.573 119.759 160.746C118.933 159.919 118.468 158.798 118.468 157.629C118.468 156.46 118.933 155.339 119.759 154.512C120.586 153.686 121.707 153.221 122.876 153.221H430.757C431.926 153.221 433.047 153.686 433.874 154.512C434.7 155.339 435.165 156.46 435.165 157.629C435.165 158.798 434.7 159.919 433.874 160.746C433.047 161.573 431.926 162.037 430.757 162.037Z" fill="#E6E6E6" />
            <path d="M323.625 140L316.72 128.951C315.421 129.233 314.077 129.226 312.781 128.932C311.486 128.637 310.27 128.063 309.221 127.248C308.171 126.433 307.313 125.398 306.707 124.215C306.101 123.033 305.762 121.732 305.713 120.404C305.616 118.169 306.342 115.977 307.754 114.241C309.165 112.506 311.165 111.349 313.373 110.989C315.58 110.63 317.844 111.092 319.733 112.29C321.623 113.487 323.007 115.336 323.625 117.486L332.155 129.417" stroke="black" stroke-width="3" />
            <path d="M373.932 168.017L355.659 150.873C355.659 150.873 347.715 148.746 350.639 146.163C353.563 143.58 345.231 141.089 345.231 141.089L335.422 131.886L321.483 141.749L325.517 148.002C325.517 148.002 325.239 158.354 330.91 156.363C336.581 154.371 335.164 162.957 335.164 162.957L352.089 189.192" stroke="black" stroke-width="3" />
            <path d="M260.855 169.835C292.106 169.835 317.441 144.5 317.441 113.249C317.441 81.9971 292.106 56.6627 260.855 56.6627C229.603 56.6627 204.269 81.9971 204.269 113.249C204.269 144.5 229.603 169.835 260.855 169.835Z" fill="#1575A7" />
            <path d="M430.5 602.5H421.64L416.942 584.5H430.5V602.5Z" stroke="black" stroke-width="3" />
            <path d="M438.254 631.987H429.817L428.31 624.02L424.453 631.987H402.074C401.002 631.987 399.957 631.644 399.093 631.008C398.229 630.372 397.591 629.477 397.272 628.453C396.952 627.429 396.969 626.33 397.319 625.316C397.668 624.302 398.333 623.426 399.216 622.816L417.087 610.474V602.421L435.884 603.543L438.254 631.987Z" fill="#6366F1" />
            <path d="M336.5 602.5H327.854L323.141 589.792L336.5 589.53V602.5Z" stroke="black" stroke-width="3" />
            <path d="M344.152 631.987H335.714L334.208 624.02L330.351 631.987H307.972C306.9 631.987 305.855 631.644 304.991 631.008C304.127 630.372 303.489 629.477 303.169 628.453C302.85 627.429 302.867 626.33 303.217 625.316C303.566 624.302 304.231 623.426 305.114 622.816L322.985 610.474V602.421L341.782 603.543L344.152 631.987Z" fill="#6366F1" />
            <path d="M416.5 317.041L363.729 302.774L361.741 285.061L416.5 300.787V317.041Z" stroke="black" stroke-width="3" />
            <path d="M429.301 397.861C429.334 397.981 429.364 398.084 429.388 398.168L425.991 468.685L425.957 469.385L426.471 469.859L426.471 469.859L426.471 469.859L426.472 469.86L426.472 469.86L426.482 469.869C426.487 469.874 426.494 469.88 426.502 469.888C426.51 469.896 426.521 469.906 426.533 469.918C426.579 469.962 426.65 470.032 426.741 470.124C426.923 470.308 427.183 470.582 427.487 470.93C428.098 471.629 428.862 472.604 429.507 473.727C430.839 476.046 431.423 478.53 429.987 480.66C427.584 484.225 428.716 487.768 430.184 490.145C430.923 491.341 431.785 492.321 432.452 492.996C432.736 493.284 432.99 493.521 433.189 493.701L447.04 582.065L385.863 581.631L385.419 553.171C385.427 553.17 385.435 553.169 385.444 553.169C386.379 553.085 387.801 552.767 388.796 551.591C389.844 550.351 390.082 548.574 389.515 546.339C388.95 544.117 387.542 541.2 384.929 537.325C383.808 535.663 382.868 532.995 382.136 529.443C381.412 525.923 380.919 521.673 380.611 516.951C379.997 507.508 380.133 496.307 380.593 485.543C381.052 474.786 381.832 464.501 382.498 456.902C382.831 453.104 383.135 449.978 383.355 447.804C383.466 446.716 383.555 445.867 383.617 445.29C383.648 445.001 383.672 444.781 383.688 444.632L383.707 444.465L383.712 444.423L383.713 444.413L383.713 444.411C383.713 444.41 383.713 444.41 382.222 444.243L383.713 444.41L383.724 444.315L383.722 444.219L383.534 432.126L383.145 407.141L383.082 403.134L380.498 406.197L320.2 477.674L319.659 478.315L319.922 479.111L326.063 497.746C326.073 497.827 326.088 497.942 326.107 498.087C326.149 498.403 326.211 498.866 326.295 499.457C326.461 500.639 326.712 502.335 327.048 504.394C327.72 508.509 328.737 514.088 330.113 519.928C331.487 525.76 333.23 531.895 335.364 537.107C337.468 542.245 340.061 546.768 343.281 549.064C345.794 550.856 347.912 554.088 349.651 558.155C351.377 562.188 352.656 566.867 353.594 571.346C354.531 575.817 355.117 580.046 355.469 583.159C355.635 584.623 355.749 585.838 355.822 586.712L304.303 588.877L298.941 560.949L298.822 560.329L298.299 559.983L298.298 559.982L298.297 559.982L298.297 559.981L298.291 559.977C298.282 559.971 298.267 559.961 298.244 559.945C298.2 559.914 298.13 559.864 298.038 559.795C297.854 559.657 297.583 559.445 297.253 559.162C296.593 558.592 295.707 557.741 294.823 556.626C293.05 554.392 291.327 551.162 291.327 547.033C291.327 544.75 291.022 536.733 290.721 529.341C290.57 525.632 290.419 522.065 290.305 519.424C290.249 518.104 290.201 517.015 290.168 516.257L290.13 515.379L290.12 515.148L290.117 515.089L290.116 515.074L290.116 515.071L290.116 515.07C290.116 515.069 290.116 515.069 288.618 515.135L290.116 515.069L290.111 514.96L290.091 514.853L282.706 476.391L291.781 454.8L335.507 350.762L352.767 314.425L362.091 303.405L418.38 317.145L431.296 358.565L430.649 371.998L430.634 372.302L430.739 372.586L430.739 372.587L430.739 372.587L430.74 372.59L430.746 372.608C430.752 372.624 430.762 372.651 430.774 372.686C430.788 372.724 430.805 372.774 430.825 372.833C430.842 372.882 430.861 372.937 430.881 372.999C430.973 373.274 431.1 373.671 431.24 374.155C431.521 375.127 431.845 376.419 432.036 377.74C432.231 379.086 432.27 380.341 432.063 381.292C431.862 382.217 431.5 382.602 431.059 382.759C429.209 383.421 428.426 385.139 428.115 386.71C427.8 388.308 427.876 390.168 428.077 391.852C428.281 393.559 428.628 395.2 428.921 396.404C429.068 397.009 429.202 397.51 429.301 397.861Z" stroke="black" stroke-width="3" />
            <path d="M422.26 183.408C422.26 183.408 433.264 175.193 433.264 224.528L431.437 242.8L426.869 249.195L420.473 268.381C420.473 268.381 422.282 280.258 425.946 284.369C429.61 288.481 429.61 304.926 411.337 298.53L359.718 284.369C355.389 277.122 354.947 281.688 360.175 272.036L357.434 253.763L346.327 220.042L352.409 188.44L367.941 182.958L386.67 165.143" stroke="black" stroke-width="3" />
            <path d="M382.5 150.5C367.532 150.5 370 146.468 370 131.5" stroke="black" stroke-width="3" />
            <path d="M432.247 167.687L432.078 168.301L432.403 168.849C432.543 169.086 432.628 169.351 432.652 169.626C432.675 169.9 432.637 170.176 432.539 170.433C432.441 170.69 432.286 170.922 432.086 171.111C431.886 171.3 431.646 171.441 431.384 171.525L431.375 171.528L431.367 171.53C429.218 172.243 427.549 173.618 426.135 175.075C425.427 175.805 424.76 176.58 424.127 177.324C424.062 177.4 423.997 177.476 423.932 177.552C423.361 178.224 422.815 178.865 422.252 179.471L422.252 179.471C421.065 180.75 419.547 181.88 418.018 182.473C416.499 183.063 415.123 183.075 413.975 182.416L413.974 182.415C412.778 181.73 412.057 180.473 411.228 178.672C411.143 178.488 411.057 178.296 410.968 178.099C410.263 176.536 409.405 174.635 407.938 173.245L407.937 173.244C404.562 170.052 399.262 170.6 395.744 172.753L395.742 172.755L395.646 172.813L395.63 172.823L395.613 172.834C395.31 173.032 394.956 173.136 394.594 173.135C394.232 173.133 393.878 173.025 393.577 172.825C393.276 172.625 393.04 172.34 392.898 172.007C392.757 171.675 392.716 171.309 392.78 170.954C393.894 165.031 395.007 159.108 396.12 153.186L393.26 152.334C390.409 159.202 386.27 165.46 381.067 170.772L381.035 170.804L381.005 170.839C379.707 172.337 378.066 173.497 376.222 174.221C375.86 174.321 375.414 174.222 374.451 173.837C374.388 173.812 374.32 173.784 374.249 173.755C374.179 173.727 374.106 173.697 374.029 173.666C375.047 172.389 376.204 170.736 377.406 168.832C379.491 165.531 381.796 161.343 383.867 156.739C387.977 147.604 391.303 136.539 389.85 127.493L389.623 126.079L388.201 126.24L379.715 127.196C379.237 125.905 378.507 124.716 377.562 123.702L374.589 120.511L374.97 124.856C375.056 125.831 374.982 126.811 374.753 127.759C374.406 127.797 374.058 127.836 373.709 127.875L373.701 127.876C373.027 127.951 372.349 128.026 371.673 128.104C369.697 128.324 368.186 128.396 367.077 127.72C366.219 127.196 365.688 126.274 365.472 124.984C365.254 123.683 365.391 122.16 365.741 120.759C367.864 112.328 374.336 105.198 382.326 101.452C384.169 100.591 385.592 100.46 386.821 100.637C388.104 100.822 389.277 101.353 390.667 102.027C390.762 102.073 390.858 102.12 390.955 102.167C393.654 103.481 396.903 105.062 401.739 103.534C410.058 100.907 417.255 101.871 422.913 105.437C428.6 109.021 432.916 115.351 435.187 123.781L435.187 123.782C439.013 137.959 436.256 153.108 432.247 167.687Z" fill="#04072F" stroke="black" stroke-width="3" />
            <path d="M508.725 632.576H475.539L475.396 632.317C474.972 631.548 474.562 630.732 474.18 629.894C470.761 622.576 469.316 614.206 468.041 606.821L467.081 601.255C466.965 600.581 467.053 599.887 467.333 599.263C467.613 598.639 468.073 598.113 468.654 597.752C469.235 597.391 469.911 597.211 470.594 597.236C471.278 597.261 471.939 597.49 472.492 597.893C477.535 601.562 482.58 605.229 487.628 608.892C489.539 610.282 491.722 611.892 493.812 613.631C494.014 612.651 494.225 611.669 494.435 610.7C494.581 610.031 494.923 609.421 495.417 608.947C495.911 608.474 496.536 608.159 497.21 608.042C497.885 607.925 498.579 608.013 499.203 608.293C499.828 608.573 500.355 609.033 500.716 609.614L504.599 615.852C507.431 620.408 509.931 624.897 509.421 629.739C509.424 629.798 509.419 629.857 509.408 629.915C509.306 630.71 509.117 631.492 508.845 632.246L508.725 632.576Z" fill="#F0F0F0" />
            <path d="M542.035 633.294L226.677 633.601C226.363 633.6 226.061 633.473 225.839 633.25C225.617 633.027 225.493 632.725 225.493 632.411C225.493 632.096 225.617 631.794 225.839 631.571C226.061 631.348 226.363 631.221 226.677 631.22L542.035 630.913C542.35 630.914 542.651 631.04 542.873 631.263C543.095 631.486 543.22 631.788 543.22 632.103C543.22 632.418 543.095 632.72 542.873 632.943C542.651 633.166 542.35 633.292 542.035 633.294Z" fill="#CACACA" />
            <path d="M255.711 189.409L221.023 160.115C219.837 159.112 219.098 157.679 218.968 156.131C218.837 154.583 219.326 153.047 220.327 151.859L226.711 144.299C227.715 143.113 229.148 142.374 230.696 142.243C232.244 142.113 233.78 142.602 234.968 143.603L269.656 172.897C270.842 173.9 271.581 175.333 271.711 176.881C271.842 178.429 271.353 179.965 270.352 181.153L263.968 188.713C262.964 189.899 261.531 190.638 259.983 190.769C258.435 190.899 256.899 190.41 255.711 189.409Z" fill="#3F3D56" />
            <path d="M222.843 152.468C222.304 153.109 222.041 153.937 222.111 154.771C222.181 155.605 222.579 156.377 223.218 156.918L257.906 186.212C258.547 186.751 259.375 187.014 260.209 186.944C261.043 186.874 261.815 186.475 262.356 185.836L268.74 178.276C269.279 177.636 269.543 176.808 269.473 175.974C269.402 175.14 269.004 174.368 268.365 173.827L233.677 144.533C233.037 143.994 232.209 143.731 231.375 143.801C230.541 143.871 229.768 144.27 229.228 144.908L222.843 152.468Z" fill="white" />
            <path d="M243.207 163.856C243.087 164.025 242.929 164.163 242.746 164.26C242.563 164.356 242.36 164.409 242.153 164.414L236.703 164.539C236.528 164.543 236.353 164.513 236.19 164.449C236.027 164.386 235.878 164.291 235.751 164.17C235.624 164.049 235.523 163.904 235.452 163.744C235.381 163.584 235.343 163.411 235.339 163.236C235.335 163.061 235.365 162.887 235.429 162.724C235.492 162.56 235.587 162.411 235.708 162.285C235.829 162.158 235.973 162.056 236.134 161.986C236.294 161.915 236.466 161.876 236.642 161.872L240.207 161.79L236.696 152.525C236.571 152.194 236.583 151.828 236.729 151.506C236.874 151.184 237.141 150.933 237.471 150.808C237.802 150.683 238.168 150.694 238.49 150.839C238.812 150.983 239.064 151.25 239.19 151.58L243.37 162.608C243.445 162.807 243.472 163.022 243.447 163.234C243.423 163.446 243.348 163.649 243.229 163.826L243.207 163.856Z" fill="#1575A7" />
            <path d="M249.99 193.45L239.058 183.673C236.988 182.826 235.3 181.248 234.316 179.24C233.331 177.231 233.117 174.931 233.714 172.776C234.312 170.62 235.68 168.758 237.558 167.544C239.437 166.329 241.695 165.845 243.906 166.185C245.221 166.378 246.477 166.857 247.587 167.588C248.696 168.319 249.632 169.284 250.328 170.416C251.024 171.548 251.463 172.819 251.615 174.139C251.767 175.459 251.627 176.796 251.206 178.056C256.202 181.905 259.003 184.062 263.999 187.911" stroke="black" stroke-width="3" />
            <path d="M349.022 234.648L308.711 249.682C308.711 249.682 283.765 221.979 274.469 224.622C265.172 227.265 263.729 216.762 263.729 216.762C263.729 216.762 258.848 207.356 255.582 210.8C252.316 214.243 250.397 194.358 250.397 194.358L260.931 182.115L279.084 194.328C279.084 194.328 295.517 197.387 290.355 201.911C285.193 206.435 311.606 216.208 311.606 216.208L344.36 196.069" stroke="black" stroke-width="3" />
            <path d="M258.865 135.948C258.106 135.948 257.357 135.771 256.677 135.431C255.998 135.091 255.407 134.598 254.952 133.99L242.954 117.993C242.568 117.479 242.288 116.894 242.129 116.272C241.969 115.65 241.934 115.002 242.025 114.366C242.116 113.73 242.331 113.118 242.658 112.565C242.986 112.013 243.419 111.53 243.932 111.144C244.97 110.366 246.275 110.032 247.559 110.215C248.195 110.306 248.807 110.521 249.36 110.849C249.913 111.176 250.396 111.609 250.781 112.123L258.631 122.588L278.791 92.3481C279.511 91.2685 280.63 90.5191 281.902 90.2646C283.174 90.0102 284.495 90.2715 285.575 90.9912C286.654 91.7109 287.404 92.83 287.658 94.1023C287.913 95.3745 287.651 96.6958 286.932 97.7753L262.936 133.769C262.502 134.42 261.918 134.957 261.233 135.336C260.549 135.715 259.783 135.924 259.001 135.946C258.956 135.947 258.91 135.948 258.865 135.948Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_1_41">
              <rect width="543.219" height="633.601" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </ImageWrapper>
      <FormWrapper>
        <Title>Login</Title>
        <Form>
          <div>
            <Label htmlFor="loginid">Login ID</Label>
            <Input id='loginid' type="email" placeholder="Enter Login ID" />
          </div>
          <Password>
            <Label htmlFor="password">Password</Label>
            <Input id='password' type="password" placeholder="Enter Password" />
            <Icon><AiFillEyeInvisible></AiFillEyeInvisible></Icon>
          </Password>
          <Remember>
            <div>
              <Checkbox type="checkbox" />
              <label>Remember me</label>
            </div>
            <Span>Change Password</Span>
          </Remember>
          <div>
            <Checkbox type="checkbox" />
            <label>Agree to <Span>Terms & Conditions</Span></label>
          </div>
          <Button type="submit">Login</Button>
          <Register>Don’t have an account? <Span>Register Here</Span></Register>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default LoginForm;
