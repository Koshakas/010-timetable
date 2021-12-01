function Work({ work }) {
    return (
        <tr>
            <td>{work.date}</td>
            <td>{work.company}</td>
            <td>{work.service}</td>
            <td>{work.description}</td>
            <td>
                {work.from} - {work.to}
            </td>
        </tr>
    );
}

export default Work;
