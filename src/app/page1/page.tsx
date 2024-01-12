import { AlertBar } from 'utua-react-library';
import style from "./style.module.css";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const PageOne = () => {
  return (
    <div className={style.container}>
      <div>
        <h3 className={style.title}>Essa é a primeira página</h3>
      </div>
      <div>
      <AlertBar
        type="dark"
        iconVariant="info"
        IconNotification={InfoOutlinedIcon}
        IconClose={CloseOutlinedIcon}
        title="Notification title"
        description="Lorem ipsum dolor sit amet consectetur. Porta aliquet placerat velit pharetra malesuada."
      />
      <hr />
      <AlertBar
        iconVariant="info"
        IconNotification={InfoOutlinedIcon}
        IconClose={CloseOutlinedIcon}
        title="Notification title"
        description="Lorem ipsum dolor sit amet consectetur. Porta aliquet placerat velit pharetra malesuada."
/>
      </div>
    </div>
  )
}

export default PageOne