import moment from 'moment';
import 'moment/locale/pt-br';

export function formatMonth(month: number) {
  return moment().add(month, 'M').locale('pt-BR').format('MMM, YYYY');
}
