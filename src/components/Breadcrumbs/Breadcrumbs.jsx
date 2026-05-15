import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Breadcrumbs.css';

function Breadcrumbs() {
  const { t } = useTranslation();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="breadcrumbs" aria-label="breadcrumb">
      <ol>
        <li>
          <Link to="/">{t('breadcrumbs.home')}</Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const label = t(`breadcrumbs.${value}`, value.charAt(0).toUpperCase() + value.slice(1));

          return last ? (
            <li key={to} className="breadcrumb-item active" aria-current="page">
              {label}
            </li>
          ) : (
            <li key={to} className="breadcrumb-item">
              <Link to={to}>{label}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
