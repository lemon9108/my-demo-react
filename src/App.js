import logo from './logo.svg';
import './App.css';
import { Row, Col, Card } from 'antd';
const { Meta } = Card;
const lists = [
  {
    name: "在线地图",
    pageName: "demo1",
    url: "/static/img/catalog/demo1.png"
  },
  {
    name: "离线地图",
    pageName: "demo2",
    url: "/static/img/catalog/demo2.png"
  },
  {
    name: "加载3D Tiles模型",
    pageName: "demo3",
    url: "/static/img/catalog/demo3.png"
  },
  {
    name: "3D Tiles模型展示优化",
    pageName: "demo4",
    url: "/static/img/catalog/demo4.png"
  },
  {
    name: "加载基础图元",
    pageName: "demo5",
    url: "/static/img/catalog/demo5.png"
  },
  {
    name: "影藏entity选中默认提示",
    pageName: "demo6",
    url: "/static/img/catalog/demo66.png"
  },
  {
    name: "自定义弹出框并随场景移动",
    pageName: "demo7",
    url: "/static/img/catalog/demo77.png"
  },
  {
    name: "绘制轨迹",
    pageName: "demo8",
    url: "/static/img/catalog/demo7.png"
  },
  {
    name: "去掉entity的点击事件（双击/点击）",
    pageName: "demo9",
    url: "/static/img/catalog/demo5.png"
  },
  // {
  //   name: "修改默认地球",
  //   pageName: "demo10",
  //   url: "/static/img/catalog/demo10.png"
  // },
  {
    name: "2D、3D、哥伦布视图切换",
    pageName: "demo11",
    url: "/static/img/catalog/demo11.png"
  },
  // {
  //   name: "禁止缩放、旋转、平移",
  //   pageName: "demo12",
  //   url: "/static/img/catalog/demo12.png"
  // },
  {
    name: "格式化clock和timeline",
    pageName: "demo13",
    url: "/static/img/catalog/demo13.png"
  },
  {
    name: "图元聚合基础教程",
    pageName: "demo14",
    url: "/static/img/catalog/demo14.png"
  },
  {
    name: "图元聚合高级教程",
    pageName: "demo15",
    url: "/static/img/catalog/demo15.png"
  },
  {
    name: "量算",
    pageName: "demo16",
    url: "/static/img/catalog/demo16.png"
  },
  {
    name: "流动纹理示例-动态输油管道",
    pageName: "demo17",
    url: "/static/img/catalog/demo17.gif"
  },
  {
    name: "地图开挖-标准开挖",
    pageName: "demo18",
    url: "/static/img/catalog/demo18.png"
  },
  {
    name: "地图开挖-自定义开挖",
    pageName: "demo19",
    url: "/static/img/catalog/demo19.png"
  },
  {
    name: "地图开挖-增加贴图",
    pageName: "demo20",
    url: "/static/img/catalog/demo20.png"
  },
  {
    name: "地图开挖-绘制开挖区域",
    pageName: "demo21",
    url: "/static/img/catalog/demo21.gif"
  },
  {
    name: "地图开挖综合实例-地下管网",
    pageName: "demo22",
    url: "/static/img/catalog/demo22.gif"
  },
  {
    name: "加载地形数据",
    pageName: "demo23",
    url: "/static/img/catalog/demo23.png"
  },
  {
    name: "两点透视分析",
    pageName: "demo24",
    url: "/static/img/catalog/demo24.png"
  },
  {
    name: "可视域分析",
    pageName: "demo25",
    url: "/static/img/catalog/demo25.png"
  },
  {
    name: "动态立体墙",
    pageName: "demo26",
    url: "/static/img/catalog/demo26.gif"
  },
  {
    name: "电子围栏报警",
    pageName: "demo27",
    url: "/static/img/catalog/demo27.png"
  },
  {
    name: "平面扫描",
    pageName: "demo28",
    url: "/static/img/catalog/demo28.gif"
  },
  {
    name: "雷达立体扫描",
    pageName: "demo29",
    url: "/static/img/catalog/demo29.gif"
  },
  {
    name: "水淹分析",
    pageName: "demo30",
    url: "/static/img/catalog/demo30.png"
  },
  {
    name: "下雨效果",
    pageName: "demo31",
    url: "/static/img/catalog/demo31.gif"
  },
  {
    name: "下雪效果",
    pageName: "demo32",
    url: "/static/img/catalog/demo32.gif"
  },
  {
    name: "风场",
    pageName: "demo33",
    url: "/static/img/catalog/demo33.gif"
  },
  {
    name: "温度场",
    pageName: "demo34",
    url: "/static/img/catalog/demo34.png"
  },
  {
    name: "闪烁点效果",
    pageName: "demo35",
    url: "/static/img/catalog/demo35.gif"
  },
  {
    name: "火焰效果",
    pageName: "demo36",
    url: "/static/img/catalog/demo36.gif"
  },
  {
    name: "大雾效果",
    pageName: "demo37",
    url: "/static/img/catalog/demo37.png"
  },
  // {
  //   name: "大雾效果（cesium自带）",
  //   pageName: "demo38",
  //   url: "/static/img/catalog/demo38.png"
  // },
  {
    name: "卷帘效果",
    pageName: "demo39",
    url: "/static/img/catalog/demo39.png"
  },
  {
    name: "水面效果",
    pageName: "demo40",
    url: "/static/img/catalog/demo40.gif"
  },
  {
    name: "热力图效果",
    pageName: "demo41",
    url: "/static/img/catalog/demo41.png"
  },
  {
    name: "面交集计算",
    pageName: "demo42",
    url: "/static/img/catalog/demo42.png"
  },
  {
    name: "绘制指定类型区域",
    pageName: "demo43",
    url: "/static/img/catalog/demo43.png"
  },
  {
    name: "范围查询",
    pageName: "demo44",
    url: "/static/img/catalog/demo44.png"
  },
  {
    name: "3DTiles模型特效",
    pageName: "demo45",
    url: "/static/img/catalog/demo45.gif"
  }
]

function App() {
  return (
    <div className="App">
      <Row>
        {lists.map((value, i) => {
          return <Col span={6}>
            <Card
              hoverable
              style={{ margin: 10 }}
              cover={<img src={value.url} />}
            >
              <Meta title={value.name} />
              {value.name}
            </Card>
          </Col>
        })
        }
      </Row>
    </div>
  );
}

export default App;
