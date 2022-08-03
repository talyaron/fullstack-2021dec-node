export default function getUserIdByParams(): string {
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const userId: string = urlParams.get("userId");
    return userId;
}
