import PropsTypes from 'prop-types';

interface ButtonProps {
  value?: any,
  type?: string,
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  switch (props.type) {
    case 'mode':
      return (
        <div onClick={props.onClick} className="btn btn-light btn-sm">
          {props.value}
        </div>
      );

    case 'nextWhite':
      return (
        <div onClick={props.onClick} className="next-button d-flex justify-content-center">
          Selanjutnya... <i className="fas fa-angle-double-right"></i>
        </div>
      );

    case 'nextBlack':
      return (
        <div onClick={props.onClick} className="next-button black d-flex justify-content-center">
          Selanjutnya... <i className="fas fa-angle-double-right"></i>
        </div>
      );

    default:
      return (
        <div onClick={props.onClick} className="btn button-container">
          {props.value}
        </div>
      );
  }
}

Button.propsTypes = {
  value: PropsTypes.any,
  type: PropsTypes.string,
  onClick: PropsTypes.func
}