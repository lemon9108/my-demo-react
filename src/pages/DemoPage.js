import { useParams, Link } from 'react-router-dom';
import { Button } from 'antd';
import demoComponents from './demo';

function DemoPage() {
  const { pageName } = useParams();
  const DemoComponent = demoComponents[pageName];

  return (
    <div style={{ padding: 20 }}>
      <Link to="/">
        <Button type="primary">返回首页</Button>
      </Link>
      {DemoComponent ? <DemoComponent /> : <p>该示例页面尚未创建</p>}
    </div>
  );
}

export default DemoPage;
