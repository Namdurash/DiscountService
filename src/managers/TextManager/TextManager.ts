export class TextManager {
  public static formatPrice(amount: number | string) {
    const formattedString = `$${amount}`;

    return formattedString;
  }
}
