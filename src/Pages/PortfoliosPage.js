import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
import portfolios from '../Components/allportfolios';
import { useState } from 'react';

const allCategories = ['Todos', ...new Set(portfolios.map(item => item.category))];

function PortfoliosPage() {
    const [categories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'Todos'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Portfolios'} span={'portfolios'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfoliosPage;
