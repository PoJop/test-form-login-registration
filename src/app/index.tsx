import './styles/tailwind.scss';
import 'antd/dist/reset.css';
import { Routing } from 'pages';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';


const App = () => {

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Montserrat',

          },
        }}
      >
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </I18nextProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
