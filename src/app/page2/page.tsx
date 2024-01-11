import { Card } from 'utua-react-library';
import style from "./style.module.css";

const PageTwo = () => {
  return (
    <div className={style.container}>
      <div>
      <h3 className={style.title}>Essa é a segunda página</h3>
      </div>
      <div>
        <Card image="https://placehold.co/334x144" title="Card title" subtitle="Secondary text" paragraph="Lorem ipsum dolor sit amet consectetur. Leo sagittis id nascetur lectus. Est tincidunt ut euismod eu nisi posuere." />
      </div>
    </div>
  )
}

export default PageTwo