export default function Label({ forElement, content }) {
    return (
        <label htmlFor={forElement}>
            {content}
        </label>
    );
}