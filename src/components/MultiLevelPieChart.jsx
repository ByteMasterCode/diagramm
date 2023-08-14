import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FFA726', '#FFD700', '#FF5733', '#C70039', '#900C3F', '#581845'];

const NestedPieChart = () => {
    const [activeSegment, setActiveSegment] = useState(null);
    const [activeOuterIndex, setActiveOuterIndex] = useState(0);
    const [activeInnerIndex, setActiveInnerIndex] = useState(0);

    const handleMouseEnter = (outerIndex, innerIndex) => {
        setActiveSegment({ outerIndex, innerIndex });
    };

    const handleMouseLeave = () => {
        setActiveSegment(null);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveInnerIndex((prevIndex) => (prevIndex + 1) % (initialData[activeOuterIndex].outerSegments.length + 1));
        }, 1000);

        return () => clearInterval(timer);
    }, [activeOuterIndex]);

    useEffect(() => {
        if (activeInnerIndex === initialData[activeOuterIndex].outerSegments.length) {
            setActiveOuterIndex((prevIndex) => (prevIndex + 1) % initialData.length);
            setActiveInnerIndex(0);
        }
    }, [activeInnerIndex, activeOuterIndex]);

    return (
        <div>
            <ResponsiveContainer width="100%" height={600}>
                <PieChart>
                    {initialData.map((outerCircle, outerIndex) => (
                        <Pie
                            key={`outer-circle-${outerIndex}`}
                            data={outerCircle.outerSegments}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={activeOuterIndex === outerIndex ? 80 + outerIndex * 20 + 10 : 80 + outerIndex * 20}
                            innerRadius={activeOuterIndex === outerIndex ? 60 + outerIndex * 20 + 5 : 60 + outerIndex * 20}
                            fill={COLORS[outerIndex % COLORS.length]}
                            startAngle={90}
                            endAngle={-270}
                        >
                            {outerCircle.outerSegments.map((entry, innerIndex) => (
                                <Cell
                                    key={`outer-segment-${outerIndex}-${innerIndex}`}
                                    fill={innerIndex === activeInnerIndex ? '#888888' : COLORS[innerIndex % COLORS.length]}
                                    onMouseEnter={() => handleMouseEnter(outerIndex, innerIndex)}
                                    onMouseLeave={handleMouseLeave}
                                />
                            ))}
                        </Pie>
                    ))}
                </PieChart>
            </ResponsiveContainer>
            {activeSegment !== null && (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    {initialData[activeSegment.outerIndex].name} -{' '}
                    {initialData[activeSegment.outerIndex].outerSegments[activeSegment.innerIndex].name}:{' '}
                    {initialData[activeSegment.outerIndex].outerSegments[activeSegment.innerIndex].value}
                </div>
            )}
        </div>
    );
};

export default NestedPieChart;
