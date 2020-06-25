import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { uniqueId } from 'lodash';
import SearchDebounce from '../SearchDebounce';
import Author from '../SearchAuthor';


const Search = ({ basicAuthors }) => {
  const compare = (a, b) => {
    const a1 = a.node.frontmatter.name.toLowerCase().split(' ').join('');
    const b1 = b.node.frontmatter.name.toLowerCase().split(' ').join('');
    if (a1 < b1) { return -1; }
    if (a1 > b1) { return 1; }
    return 0;
  };
  const { t } = useTranslation();
  const [authors, setAuthors] = useState(basicAuthors.sort(compare));
  useEffect(() => setAuthors(basicAuthors), [basicAuthors]);
  const handleChange = (text) => {
    const searchText = text.toLowerCase();
    setAuthors(
      basicAuthors.filter(
        author => author.node.frontmatter.name.toLowerCase().includes(searchText)
        || author.node.frontmatter.birthPlace.toLowerCase().includes(searchText),
      ).sort(compare),
    );
  };
  return (
    <div>
      <SearchDebounce handleChange={(...args) => handleChange(...args)} t={t} />
      <div>
        {
          authors.length > 0 ? authors.map(author => <div key={uniqueId()}><Author author={author.node.frontmatter} t={t} /></div>) : <p className="find">{t('find')}</p>
          }
      </div>
    </div>
  );
};

export default Search;
