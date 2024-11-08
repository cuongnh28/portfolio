const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

exports.generate = async () => {
  const feed = new RSS({
    title: 'Alex Dinh',
    description: 'Hey! I am Alex, a full-stack developer from Vietnam.',
    feed_url: 'https://portfolio.haidinh.link/feed.xml',
    site_url: 'https://portfolio.haidinh.link',
    managingEditor: 'Alex Dinh',
    webMaster: 'Alex Dinh',
    language: 'en',
    copyright: `Alex Dinh', | ${new Date().getFullYear()}`,
  });

  const posts = await fs.readdir(path.join(__dirname, '..', 'data', 'blogs'));

  await Promise.all(
    posts.map(async (filename) => {
      const blogsData = await fs.readFile(
        path.join(path.join(__dirname, '..', 'data', 'blogs', filename))
      );

      const frontmatter = matter(blogsData);

      feed.item({
        title: frontmatter.data.title,
        description: frontmatter.data.subtitle,
        url: frontmatter.data.url,
        author: 'Alex Dinh',
        date: frontmatter.data.date,
        categories: frontmatter.data.tags.split(', '),
      });
    })
  );

  await fs.writeFile('./public/rss.xml', feed.xml({ indent: true }));
};
