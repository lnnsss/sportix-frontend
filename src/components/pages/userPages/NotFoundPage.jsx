import React from 'react';
import { NotFound } from '../../NotFound/index.jsx';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>Страница не найдена</title>
            </Helmet>
            <NotFound/>
        </>
    );
};

export default NotFoundPage;