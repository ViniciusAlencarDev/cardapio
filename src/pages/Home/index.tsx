import React, { useState, useRef, useEffect } from 'react';
import * as Styles from './styles';
import { FaListAlt, FaFilter, FaUtensils } from 'react-icons/fa';

import FloatMenu from '../../components/FloatMenu';

import { nameSystem } from '../../config/config.json';
import { categories, items } from '../../database/db.json';

import Logo from '../../assets/logo.png';


let start = 0;
let timestamp = 0;

export default function Home() {

    const [categorySelected, setCategorySelected] = useState(0);

    const contentRef = useRef<any>();
    useEffect(() => {
        contentRef.current?.addEventListener('touchstart', (e: any) => {
            start = e.targetTouches[0].clientX;
            timestamp = new Date().getTime();
        })
        contentRef.current?.addEventListener('touchend', (e: any) => {
            const end = e.changedTouches[0].clientX;
            const diff = end - start;
            timestamp = new Date().getTime() - timestamp;
            
            if(start !== 0 && timestamp < 200) {
                start = 0;
                timestamp = 0;
                if(diff > 100) {
                    setCategorySelected(c => c > 0 ? c - 1 : c);
                    
                } else if(diff < -100) {
                    setCategorySelected(c => c < (categories.length - 1) ? c + 1 : c);
                }
            }
        })
    }, [])

    function handlerCategorySelected(id: number) {
        setCategorySelected(id);
    }

    return (
        <Styles.Container>
            <FloatMenu />

            <Styles.Header>
                <Styles.HeaderTitle>
                    <Styles.HeaderImage src={Logo} />
                    <div>{nameSystem}</div>
                </Styles.HeaderTitle>
            </Styles.Header>

            <Styles.SubHeader>
                {
                    categories.map((category, categoryKey) => (
                        <Styles.SubHeaderButton key={categoryKey} selected={categoryKey === categorySelected} onClick={() => handlerCategorySelected(categoryKey)}>
                            {categoryKey === 0 ? <FaListAlt size={10} style={{ marginRight: 5 }} /> : <FaFilter size={10} style={{ marginRight: 5 }} />}
                            {category}
                        </Styles.SubHeaderButton>
                    ))
                }
            </Styles.SubHeader>

            <Styles.Content ref={contentRef}>

                {
                    categorySelected === 0
                        ?
                        categories.slice(1, categories.length).map((category, categoryKey) => (
                            <Styles.Box key={categoryKey}>
                                <Styles.BoxTitle>
                                    <Styles.BoxTitleSpan><FaUtensils size={20} style={{ marginRight: 10 }} />{category}</Styles.BoxTitleSpan>
                                </Styles.BoxTitle>
                                <Styles.BoxContent>
                                    {
                                        items.filter(item => item.category === (categoryKey + 1)).map((item, itemKey) => (
                                            <Styles.BoxItem key={itemKey}>
                                                <Styles.BoxItemDescription>{item.name}</Styles.BoxItemDescription>
                                                <Styles.BoxItemSpace>..........................................................................................................................................................................................................................................................</Styles.BoxItemSpace>
                                                <Styles.BoxItemPrice>{item.price == 0 ? "R$ --,--" : item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Styles.BoxItemPrice>
                                            </Styles.BoxItem>
                                        ))
                                    }
                                </Styles.BoxContent>
                            </Styles.Box>
                        ))
                        :
                        categories.slice(0, categories.length).filter((_, categoryKey) => categoryKey === categorySelected).map((category, categoryKey) => (
                            <Styles.Box key={categoryKey}>
                                <Styles.BoxTitle>
                                    <Styles.BoxTitleSpan><FaUtensils size={20} style={{ marginRight: 10 }} />{category}</Styles.BoxTitleSpan>
                                </Styles.BoxTitle>
                                <Styles.BoxContent>
                                    {
                                        items.filter(item => item.category === categorySelected).map((item, itemKey) => (
                                            <Styles.BoxItem key={itemKey}>
                                                <Styles.BoxItemDescription>{item.name}</Styles.BoxItemDescription>
                                                <Styles.BoxItemSpace>..........................................................................................................................................................................................................................................................</Styles.BoxItemSpace>
                                                <Styles.BoxItemPrice>{item.price == 0 ? "R$ --,--" : item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Styles.BoxItemPrice>
                                            </Styles.BoxItem>
                                        ))
                                    }
                                </Styles.BoxContent>
                            </Styles.Box>
                        ))
                }
            </Styles.Content>

        </Styles.Container>
    );

}
