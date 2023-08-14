import logo from './logo.svg';
import './App.css';

import NestedPieChart from "./components/MultiLevelPieChart";
const initialData = [
    {
        name: 'Внешний Круг 1',
        value: 1500,
        outerSegments: [
            { name: 'Сегмент 1', value: 100 },
            { name: 'Сегмент 2', value: 150 },
            { name: 'Сегмент 3', value: 200 },
            { name: 'Сегмент 4', value: 250 },
            { name: 'Сегмент 5', value: 300 },
            { name: 'Сегмент 6', value: 350 },
            { name: 'Сегмент 7', value: 400 },
            { name: 'Сегмент 8', value: 450 },
            { name: 'Сегмент 9', value: 500 },
            { name: 'Сегмент 10', value: 550 },
        ],
    },
    {
        name: 'Внешний Круг 2',
        value: 2000,
        outerSegments: [
            { name: 'Сегмент 1', value: 200 },
            { name: 'Сегмент 2', value: 250 },
            { name: 'Сегмент 3', value: 300 },
            { name: 'Сегмент 4', value: 350 },
            { name: 'Сегмент 5', value: 400 },
            { name: 'Сегмент 6', value: 450 },
            { name: 'Сегмент 7', value: 500 },
            { name: 'Сегмент 8', value: 550 },
            { name: 'Сегмент 9', value: 600 },
            { name: 'Сегмент 10', value: 650 },
        ],
    },
    {
        name: 'Внешний Круг 3',
        value: 2000,
        outerSegments: [
            { name: 'Сегмент 1', value: 1000 },
            { name: 'Сегмент 2', value: 250 },
            { name: 'Сегмент 3', value: 300 },
            { name: 'Сегмент 4', value: 8989 },
            { name: 'Сегмент 5', value: 400 },
            { name: 'Сегмент 6', value: 450 },
            { name: 'Сегмент 7', value: 213 },
            { name: 'Сегмент 8', value: 550 },
            { name: 'Сегмент 9', value: 600 },
            { name: 'Сегмент 10', value: 650 },
        ],
    },
    // Добавьте другие внешние круги...
];
function App() {
  return (
    <div className="App">
      <NestedPieChart/>
    </div>
  );
}

export default App;
