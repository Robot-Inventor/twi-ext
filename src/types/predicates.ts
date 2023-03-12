import type { TwiExtPollData } from './index';
import type { ReactProps, ReactPropsEntities, ReactPropsCardPollBindingValuesBase, ReactPropsCardPoll2, ReactPropsCardPoll3, ReactPropsCardPoll4, ReactPropsTweetInfo, ReactPropsUserInfo } from './internal';

const isNumber = (value: unknown): value is number => typeof value === 'number';
const isString = (value: unknown): value is string => typeof value === 'string';
const isUndefined = (value: unknown): value is undefined => typeof value === 'undefined';
const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);
const isUnion = (unionChecks: ((value: unknown) => boolean)[]) =>
  (value: unknown): boolean =>
    unionChecks.reduce((s: boolean, isT) => s || isT(value), false)
type ArrayCheckOption = 'all' | 'first';
const isArray = <T>(
  childCheckFn:
    | ((value: unknown) => value is T)
    | ((value: unknown) => boolean),
  checkOption: ArrayCheckOption = 'all'
) => (array: unknown): boolean =>
  Array.isArray(array) &&
  (checkOption === 'all'
    ? ((array) => {
        for (const val of array) {
          if (!childCheckFn(val)) return false
        }
        return true;
      })(array)
    : typeof array[0] === "undefined" || childCheckFn(array[0]));

export const isTwiExtPollData = (arg_0: unknown): arg_0 is TwiExtPollData => isObject(arg_0) && 
  ('isFinal' in arg_0 && ((arg_1: unknown): boolean => isUnion([(arg_2: unknown): boolean => arg_2 === false, (arg_2: unknown): boolean => arg_2 === true])(arg_1))(arg_0['isFinal'])) && ('totalVotes' in arg_0 && (isNumber)(arg_0['totalVotes'])) && ('choices' in arg_0 && ((arg_1: unknown): boolean => isArray((arg_2: unknown): boolean => isObject(arg_2) && 
  ('label' in arg_2 && (isString)(arg_2['label'])) && ('count' in arg_2 && (isNumber)(arg_2['count'])))(arg_1))(arg_0['choices']));

export const isReactProps = (arg_0: unknown): arg_0 is ReactProps => isObject(arg_0) && 
  ('children' in arg_0 && ((arg_1: unknown): boolean => isObject(arg_1) && 
  ('0' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['0'])) && ('1' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['1'])) && ('length' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['length'])) && ('toString' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['toString'])) && ('toLocaleString' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['toLocaleString'])) && ('pop' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['pop'])) && ('push' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['push'])) && ('concat' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['concat'])) && ('join' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['join'])) && ('reverse' in arg_1 && ((arg_2: unknown): boolean => isArray(/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_2))(arg_1['reverse'])) && ('shift' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['shift'])) && ('slice' in arg_1 && ((arg_2: unknown): boolean => isArray(/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_2))(arg_1['slice'])) && ('sort' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['sort'])) && ('splice' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['splice'])) && ('unshift' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['unshift'])) && ('indexOf' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['indexOf'])) && ('lastIndexOf' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['lastIndexOf'])) && ('every' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['every'])) && ('some' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['some'])) && ('forEach' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['forEach'])) && ('map' in arg_1 && ((arg_2: unknown): boolean => isArray(/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_2))(arg_1['map'])) && ('filter' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['filter'])) && ('reduce' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['reduce'])) && ('reduceRight' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['reduceRight'])) && ('find' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['find'])) && ('findIndex' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['findIndex'])) && ('fill' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['fill'])) && ('copyWithin' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['copyWithin'])) && ('entries' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['entries'])) && ('keys' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['keys'])) && ('values' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['values'])) && ('includes' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['includes'])) && ('flatMap' in arg_1 && ((arg_2: unknown): boolean => isArray(/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_2))(arg_1['flatMap'])) && ('flat' in arg_1 && ((arg_2: unknown): boolean => isArray(/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_2))(arg_1['flat'])) && ('at' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['at'])) && ('__@iterator@35' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['__@iterator@35'])) && ('__@unscopables@37' in arg_1 && (/* WARN: Not Supported Type */ (value: unknown) => {
      console.warn(`check was skipped because ${value} is not supported type.`);
      return true;
    })(arg_1['__@unscopables@37'])))(arg_0['children']));

export const isReactPropsEntities = (arg_0: unknown): arg_0 is ReactPropsEntities => isObject(arg_0) && 
  ('hashtags' in arg_0 && ((arg_1: unknown): boolean => isArray((arg_2: unknown): boolean => isObject(arg_2) && 
  ('text' in arg_2 && (isString)(arg_2['text'])))(arg_1))(arg_0['hashtags'])) && ('urls' in arg_0 && ((arg_1: unknown): boolean => isArray((arg_2: unknown): boolean => isObject(arg_2) && 
  ('display_url' in arg_2 && (isString)(arg_2['display_url'])) && ('expanded_url' in arg_2 && (isString)(arg_2['expanded_url'])) && ('url' in arg_2 && (isString)(arg_2['url'])))(arg_1))(arg_0['urls'])) && ('user_mentions' in arg_0 && ((arg_1: unknown): boolean => isArray((arg_2: unknown): boolean => isObject(arg_2) && 
  ('screen_name' in arg_2 && (isString)(arg_2['screen_name'])))(arg_1))(arg_0['user_mentions']));

export const isReactPropsCardPollBindingValuesBase = (arg_0: unknown): arg_0 is ReactPropsCardPollBindingValuesBase => isObject(arg_0) && 
  (((arg_1: unknown): boolean => isUnion([isUndefined, (arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type']))])(arg_1))(arg_0['selected_choice'])) && ('counts_are_final' in arg_0 && ((arg_1: unknown): boolean => isObject(arg_1) && 
  ('boolean_value' in arg_1 && ((arg_2: unknown): boolean => isUnion([(arg_3: unknown): boolean => arg_3 === false, (arg_3: unknown): boolean => arg_3 === true])(arg_2))(arg_1['boolean_value'])) && ('type' in arg_1 && ((arg_2: unknown): boolean => arg_2 === "BOOLEAN")(arg_1['type'])))(arg_0['counts_are_final']));

export const isReactPropsCardPoll2 = (arg_0: unknown): arg_0 is ReactPropsCardPoll2 => isObject(arg_0) && 
  ('name' in arg_0 && ((arg_1: unknown): boolean => arg_1 === "poll2choice_text_only")(arg_0['name'])) && ('binding_values' in arg_0 && ((arg_1: unknown): boolean => isObject(arg_1) && 
  ('choice1_label' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice1_label'])) && ('choice2_label' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice2_label'])) && ('choice1_count' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice1_count'])) && ('choice2_count' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice2_count'])) && (((arg_2: unknown): boolean => isUnion([isUndefined, (arg_3: unknown): boolean => isObject(arg_3) && 
  ('string_value' in arg_3 && (isString)(arg_3['string_value'])) && ('type' in arg_3 && ((arg_4: unknown): boolean => arg_4 === "STRING")(arg_3['type']))])(arg_2))(arg_1['selected_choice'])) && ('counts_are_final' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('boolean_value' in arg_2 && ((arg_3: unknown): boolean => isUnion([(arg_4: unknown): boolean => arg_4 === false, (arg_4: unknown): boolean => arg_4 === true])(arg_3))(arg_2['boolean_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "BOOLEAN")(arg_2['type'])))(arg_1['counts_are_final'])))(arg_0['binding_values']));

export const isReactPropsCardPoll3 = (arg_0: unknown): arg_0 is ReactPropsCardPoll3 => isObject(arg_0) && 
  ('name' in arg_0 && ((arg_1: unknown): boolean => arg_1 === "poll3choice_text_only")(arg_0['name'])) && ('binding_values' in arg_0 && ((arg_1: unknown): boolean => isObject(arg_1) && 
  ('choice1_label' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice1_label'])) && ('choice2_label' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice2_label'])) && ('choice3_label' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice3_label'])) && ('choice1_count' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice1_count'])) && ('choice2_count' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice2_count'])) && ('choice3_count' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice3_count'])) && (((arg_2: unknown): boolean => isUnion([isUndefined, (arg_3: unknown): boolean => isObject(arg_3) && 
  ('string_value' in arg_3 && (isString)(arg_3['string_value'])) && ('type' in arg_3 && ((arg_4: unknown): boolean => arg_4 === "STRING")(arg_3['type']))])(arg_2))(arg_1['selected_choice'])) && ('counts_are_final' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('boolean_value' in arg_2 && ((arg_3: unknown): boolean => isUnion([(arg_4: unknown): boolean => arg_4 === false, (arg_4: unknown): boolean => arg_4 === true])(arg_3))(arg_2['boolean_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "BOOLEAN")(arg_2['type'])))(arg_1['counts_are_final'])))(arg_0['binding_values']));

export const isReactPropsCardPoll4 = (arg_0: unknown): arg_0 is ReactPropsCardPoll4 => isObject(arg_0) && 
  ('name' in arg_0 && ((arg_1: unknown): boolean => arg_1 === "poll4choice_text_only")(arg_0['name'])) && ('binding_values' in arg_0 && ((arg_1: unknown): boolean => isObject(arg_1) && 
  ('choice1_label' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice1_label'])) && ('choice2_label' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice2_label'])) && ('choice3_label' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice3_label'])) && ('choice4_label' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice4_label'])) && ('choice1_count' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice1_count'])) && ('choice2_count' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice2_count'])) && ('choice3_count' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice3_count'])) && ('choice4_count' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('string_value' in arg_2 && (isString)(arg_2['string_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "STRING")(arg_2['type'])))(arg_1['choice4_count'])) && (((arg_2: unknown): boolean => isUnion([isUndefined, (arg_3: unknown): boolean => isObject(arg_3) && 
  ('string_value' in arg_3 && (isString)(arg_3['string_value'])) && ('type' in arg_3 && ((arg_4: unknown): boolean => arg_4 === "STRING")(arg_3['type']))])(arg_2))(arg_1['selected_choice'])) && ('counts_are_final' in arg_1 && ((arg_2: unknown): boolean => isObject(arg_2) && 
  ('boolean_value' in arg_2 && ((arg_3: unknown): boolean => isUnion([(arg_4: unknown): boolean => arg_4 === false, (arg_4: unknown): boolean => arg_4 === true])(arg_3))(arg_2['boolean_value'])) && ('type' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "BOOLEAN")(arg_2['type'])))(arg_1['counts_are_final'])))(arg_0['binding_values']));

export const isReactPropsTweetInfo = (arg_0: unknown): arg_0 is ReactPropsTweetInfo => isObject(arg_0) && 
  ('id_str' in arg_0 && (isString)(arg_0['id_str'])) && ('full_text' in arg_0 && (isString)(arg_0['full_text'])) && ('entities' in arg_0 && (isReactPropsEntities)(arg_0['entities'])) && (((arg_1: unknown): boolean => isUnion([isUndefined, (arg_2: unknown): boolean => isObject(arg_2) && 
  ('text' in arg_2 && (isString)(arg_2['text'])) && ('entity_set' in arg_2 && (isReactPropsEntities)(arg_2['entity_set']))])(arg_1))(arg_0['note_tweet'])) && ('lang' in arg_0 && (isString)(arg_0['lang'])) && ('reply_count' in arg_0 && (isNumber)(arg_0['reply_count'])) && ('retweet_count' in arg_0 && (isNumber)(arg_0['retweet_count'])) && ('quote_count' in arg_0 && (isNumber)(arg_0['quote_count'])) && ('favorite_count' in arg_0 && (isNumber)(arg_0['favorite_count'])) && (((arg_1: unknown): boolean => isUnion([isUndefined, (arg_2: unknown): boolean => isObject(arg_2) && 
  ('count' in arg_2 && (isNumber)(arg_2['count'])) && ('state' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "EnabledWithCount")(arg_2['state'])), (arg_2: unknown): boolean => isObject(arg_2) && 
  ('state' in arg_2 && ((arg_3: unknown): boolean => arg_3 === "Enabled")(arg_2['state']))])(arg_1))(arg_0['views'])) && ('created_at' in arg_0 && (isString)(arg_0['created_at'])) && ('source_name' in arg_0 && (isString)(arg_0['source_name'])) && ('source_url' in arg_0 && (isString)(arg_0['source_url'])) && (((arg_1: unknown): boolean => isUnion([isUndefined, isReactPropsCardPoll2, isReactPropsCardPoll3, isReactPropsCardPoll4])(arg_1))(arg_0['card'])) && ('user' in arg_0 && (isReactPropsUserInfo)(arg_0['user']));

export const isReactPropsUserInfo = (arg_0: unknown): arg_0 is ReactPropsUserInfo => isObject(arg_0) && 
  ('id_str' in arg_0 && (isString)(arg_0['id_str'])) && ('name' in arg_0 && (isString)(arg_0['name'])) && ('screen_name' in arg_0 && (isString)(arg_0['screen_name'])) && ('description' in arg_0 && (isString)(arg_0['description'])) && ('verified' in arg_0 && ((arg_1: unknown): boolean => isUnion([(arg_2: unknown): boolean => arg_2 === false, (arg_2: unknown): boolean => arg_2 === true])(arg_1))(arg_0['verified'])) && ('is_blue_verified' in arg_0 && ((arg_1: unknown): boolean => isUnion([(arg_2: unknown): boolean => arg_2 === false, (arg_2: unknown): boolean => arg_2 === true])(arg_1))(arg_0['is_blue_verified'])) && ('protected' in arg_0 && ((arg_1: unknown): boolean => isUnion([(arg_2: unknown): boolean => arg_2 === false, (arg_2: unknown): boolean => arg_2 === true])(arg_1))(arg_0['protected'])) && ('created_at' in arg_0 && (isString)(arg_0['created_at'])) && ('following' in arg_0 && ((arg_1: unknown): boolean => isUnion([(arg_2: unknown): boolean => arg_2 === false, (arg_2: unknown): boolean => arg_2 === true])(arg_1))(arg_0['following'])) && ('followed_by' in arg_0 && ((arg_1: unknown): boolean => isUnion([(arg_2: unknown): boolean => arg_2 === false, (arg_2: unknown): boolean => arg_2 === true])(arg_1))(arg_0['followed_by'])) && ('blocking' in arg_0 && ((arg_1: unknown): boolean => isUnion([(arg_2: unknown): boolean => arg_2 === false, (arg_2: unknown): boolean => arg_2 === true])(arg_1))(arg_0['blocking'])) && ('blocked_by' in arg_0 && ((arg_1: unknown): boolean => isUnion([(arg_2: unknown): boolean => arg_2 === false, (arg_2: unknown): boolean => arg_2 === true])(arg_1))(arg_0['blocked_by'])) && ('muting' in arg_0 && ((arg_1: unknown): boolean => isUnion([(arg_2: unknown): boolean => arg_2 === false, (arg_2: unknown): boolean => arg_2 === true])(arg_1))(arg_0['muting'])) && ('followers_count' in arg_0 && (isNumber)(arg_0['followers_count'])) && ('friends_count' in arg_0 && (isNumber)(arg_0['friends_count'])) && ('statuses_count' in arg_0 && (isNumber)(arg_0['statuses_count'])) && ('media_count' in arg_0 && (isNumber)(arg_0['media_count'])) && ('favourites_count' in arg_0 && (isNumber)(arg_0['favourites_count']));
